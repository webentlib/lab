export class BaseModel {
    constructor(data) {
        for (const [k, v] of Object.entries(data)) {
            this[k] = v
        }
    }
}