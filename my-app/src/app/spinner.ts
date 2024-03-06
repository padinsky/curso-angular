import { ISpinner } from "./util";

export function Spinner() {
    return (target: any, propertyKay: string, descriptor: PropertyDescriptor) => {
        const oldFunction: Function = descriptor.value as Function;
        descriptor.value = async function (...args:[]) { // Siempre que decoremos un método no podemos usar una función flecha
            const spinner: ISpinner = this as ISpinner;
            try {
                spinner.on();
                return await oldFunction.apply(this, args);
            } catch(err) {
                // Todo
                console.log(err);
            } finally {
                // Todo
                spinner.off();
            }
        }
    }
}