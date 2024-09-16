export async function createPosition(_, args, context) {
    const { name } = args;
    return await context.prisma.position.create({ data: { name } })
}