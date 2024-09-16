export async function createDepartment(_, args, context) {
    const { name } = args;
    return await context.prisma.department.create({ data: { name } })
}