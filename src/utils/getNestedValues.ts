// @ts-expect-error ignore 
export function getNestedValue(obj, path: string) {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
}