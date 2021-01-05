"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = __importDefault(require("./ParentType"));
class Comparator extends ParentType_1.default {
    constructor() {
        super(...arguments);
        this.name = 'comparator';
        this.comparator = null;
    }
    getHash() {
        var _a, _b;
        if (this.comparator) {
            return this.hashValues((_a = this.comparator) === null || _a === void 0 ? void 0 : _a.getOperands(), (_b = this.comparator) === null || _b === void 0 ? void 0 : _b.getName());
        }
        else {
            return '';
        }
    }
    getJSONData() {
        var _a, _b;
        return {
            type: this.name,
            comparator: (_a = this.comparator) === null || _a === void 0 ? void 0 : _a.getName(),
            value: (_b = this.comparator) === null || _b === void 0 ? void 0 : _b.getOperands()
        };
    }
    getResult(vars, childrenValues) {
        var _a;
        return (_a = this.comparator) === null || _a === void 0 ? void 0 : _a.getResult(vars, childrenValues);
    }
    createFromParser(parsedData, loader) {
        let instance = Comparator.create(loader);
        instance.comparator = loader.getComparatorProviderConfig().createInstance(parsedData.comparator);
        return instance;
    }
    isValid(vars, childrenValues) {
        if (this.comparator === null) {
            return false;
        }
        return this.comparator.isValid(vars, childrenValues);
    }
    setComparator(comparator) {
        this.comparator = comparator;
        return this;
    }
    addValue(value) {
        if (!this.comparator) {
            throw `Can't add operand without any comparator`;
        }
        this.comparator.addOperand(value);
        return this;
    }
    removeValue(index) {
        if (!this.comparator) {
            throw `Can't add operand without any comparator`;
        }
        this.comparator.removeOperand(index);
    }
    toString() {
        if (!this.comparator) {
            return '';
        }
        return this.comparator.toString();
    }
    getValues() {
        if (!this.comparator) {
            return [];
        }
        return this.comparator.getOperands();
    }
}
exports.default = Comparator;
