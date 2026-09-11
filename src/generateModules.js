import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modules = [
    'hospital', 'doctor', 'diagnosticCenter', 'bloodService',
    'fireService', 'policeStation', 'busService', 'trainService',
    'courierService', 'electricityOffice', 'municipalService', 'hotel',
    'restaurant', 'touristPlace', 'houseRental', 'property',
    'job', 'entrepreneur', 'marketRate', 'teacher',
    'product', 'category', 'banner', 'featured',
    'user', 'review'
];

const modulesDir = path.join(__dirname, 'modules');
if (!fs.existsSync(modulesDir)) {
    fs.mkdirSync(modulesDir, { recursive: true });
}

modules.forEach((mod) => {
    const modDir = path.join(modulesDir, mod);
    if (!fs.existsSync(modDir)) {
        fs.mkdirSync(modDir, { recursive: true });
    }

    const titleCase = mod.charAt(0).toUpperCase() + mod.slice(1);

    // 1. Model
    const modelContent = `/**
 * ${titleCase} Model Schema
 */
export const ${mod}Schema = {
    collectionName: '${mod}s',
    fields: {
        id: 'ObjectId',
        title: 'String',
        name: 'String',
        category: 'String',
        description: 'String',
        contactPhone: 'String',
        address: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
`;
    fs.writeFileSync(path.join(modDir, `${mod}.model.js`), modelContent);

    // 2. Validation
    const valContent = `/**
 * ${titleCase} Input Validation
 */
export const validate${titleCase} = (data) => {
    const errors = [];
    if (!data.name && !data.title) {
        errors.push('Name or Title is required.');
    }
    return {
        isValid: errors.length === 0,
        errors
    };
};
`;
    fs.writeFileSync(path.join(modDir, `${mod}.validation.js`), valContent);

    // 3. Service
    const serviceContent = `/**
 * ${titleCase} Service Layer
 */
import { getDB } from '../../database/db.js';

export const getAll${titleCase}sService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return [
            { id: '1', name: 'Sample ${titleCase} 1', description: 'Smart City Verified Service', phone: '01700000000', address: 'Dinajpur' }
        ];
    }
    try {
        const collection = db.collection('${mod}s');
        return await collection.find(query).toArray();
    } catch (err) {
        return [{ id: '1', name: 'Sample ${titleCase}', phone: '01700000000' }];
    }
};

export const get${titleCase}ByIdService = async (id) => {
    const db = getDB();
    if (!db) return { id, name: 'Sample ${titleCase} Detail', phone: '01700000000' };
    const collection = db.collection('${mod}s');
    return await collection.findOne({ _id: id });
};

export const create${titleCase}Service = async (data) => {
    const db = getDB();
    const newItem = { ...data, createdAt: new Date() };
    if (!db) return { id: Date.now().toString(), ...newItem };
    const collection = db.collection('${mod}s');
    const result = await collection.insertOne(newItem);
    return { _id: result.insertedId, ...newItem };
};
`;
    fs.writeFileSync(path.join(modDir, `${mod}.service.js`), serviceContent);

    // 4. Controller
    const controllerContent = `/**
 * ${titleCase} Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validate${titleCase} } from './${mod}.validation.js';
import {
    getAll${titleCase}sService,
    get${titleCase}ByIdService,
    create${titleCase}Service
} from './${mod}.service.js';

export const get${titleCase}s = async (req, res) => {
    try {
        const items = await getAll${titleCase}sService(req.query);
        return successResponse(res, items, '${titleCase} items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch ${mod} items', 500, error);
    }
};

export const get${titleCase}ById = async (req, res) => {
    try {
        const item = await get${titleCase}ByIdService(req.params.id);
        if (!item) return errorResponse(res, '${titleCase} not found', 404);
        return successResponse(res, item, '${titleCase} details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching ${mod} detail', 500, error);
    }
};

export const create${titleCase} = async (req, res) => {
    try {
        const validation = validate${titleCase}(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await create${titleCase}Service(req.body);
        return successResponse(res, created, '${titleCase} created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create ${mod}', 500, error);
    }
};
`;
    fs.writeFileSync(path.join(modDir, `${mod}.controller.js`), controllerContent);

    // 5. Routes
    const routeContent = `/**
 * ${titleCase} Routes
 */
import { Router } from 'express';
import { get${titleCase}s, get${titleCase}ById, create${titleCase} } from './${mod}.controller.js';

const router = Router();

router.get('/', get${titleCase}s);
router.get('/:id', get${titleCase}ById);
router.post('/', create${titleCase});

export default router;
`;
    fs.writeFileSync(path.join(modDir, `${mod}.routes.js`), routeContent);
});

console.log(`Successfully generated ${modules.length} server modules!`);
