export function Spinner() {
    return (target: any, propertyKay: string, descriptor: PropertyDescriptor) => {
        const oldFunction: Function = descriptor.value as Function;
        descriptor.value = async (...args:[]) => {
            try {
                return await oldFunction.apply(this, args); // Este error tiene que ver con Typescript
            } catch {
                // Todo
            } finally {
                // Todo
            }
        }
    }
}