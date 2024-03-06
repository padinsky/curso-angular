export function Spinner() {
    return (target: any, propertyKay: string, descriptor: PropertyDescriptor) => {
        const oldFunction: Function = descriptor.value as Function;
        descriptor.value = async function (...args:[]) { // Siempre que decoremos un método no podemos usar una función flecha
            try {
                return await oldFunction.apply(this, args);
            } catch {
                // Todo
            } finally {
                // Todo
            }
        }
    }
}