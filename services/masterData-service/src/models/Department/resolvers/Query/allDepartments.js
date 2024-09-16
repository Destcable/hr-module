export async function allDepartments(_, args, context) {
    return await context.prisma.department.findMany();
};

export async function _allDepartmentsMeta(_, args, context) {
    return { count: await context.prisma.department.count() }
}