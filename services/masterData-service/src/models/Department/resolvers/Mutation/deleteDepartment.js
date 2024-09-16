export async function deleteDepartment(_, args, context) {
    const { id } = args;
    return await context.prisma.department.delete({
        where: { id }
    })
}