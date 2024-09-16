export async function allPositions(_, args, context) {
    return await context.prisma.position.findMany()
};

export async function _allPositionsMeta(_, args, context) {
    return { count: await context.prisma.position.count() }
};