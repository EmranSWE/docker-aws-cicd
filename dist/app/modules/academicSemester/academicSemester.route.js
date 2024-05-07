"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
// import { UserController } from './user.controller';
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const acdemicSemester_validation_1 = require("./acdemicSemester.validation");
const router = express_1.default.Router();
router.post('/create-semester', (0, validateRequest_1.default)(acdemicSemester_validation_1.AcademicSemesterValidation.createAcademicSemesterZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemester_controller_1.AcademicSemesterController.createSemester);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.FACULTY, user_1.ENUM_USER_ROLE.STUDENT), academicSemester_controller_1.AcademicSemesterController.getSingleSemester);
router.get('/', 
// auth(
//   ENUM_USER_ROLE.SUPER_ADMIN,
//   ENUM_USER_ROLE.ADMIN,
//   ENUM_USER_ROLE.FACULTY,
//   ENUM_USER_ROLE.STUDENT
// ),
academicSemester_controller_1.AcademicSemesterController.getAllSemesters);
router.patch('/:id', (0, validateRequest_1.default)(acdemicSemester_validation_1.AcademicSemesterValidation.updateAcademicSemesterZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemester_controller_1.AcademicSemesterController.updateSemester);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemester_controller_1.AcademicSemesterController.deleteSemester);
exports.AcademicSemesterRoutes = router;
