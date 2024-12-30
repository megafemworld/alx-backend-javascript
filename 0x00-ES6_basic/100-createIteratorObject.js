export default function createIteratorObject(report) {
    return {
        [Symbol.iterator]() {
        let step = 0;
        const departments = Object.values(report.allEmployees);
        const employees = departments.reduce((acc, item) => acc.concat(item), []);
        return {
            next() {
            const value = employees[step];
            const done = step >= employees.length;
            step += 1;
            return { value, done };
            },
        };
        },
    };
}