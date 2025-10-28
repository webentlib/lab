export class BaseModel {
    constructor(data) {
        if (!data) data = {};
        for (const [k, v] of Object.entries(data)) {
            this[k] = v
        }
    }
}