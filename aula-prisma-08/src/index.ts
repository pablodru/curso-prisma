import prisma from "./database";

(async () => {
  
  const result = await prisma.student.groupBy({
    by: ['class'],
    _count: { id: true },
    orderBy: {
      _count:{
        id:'desc'
      }
    }
  })

  console.log(result);

  const result2 = await prisma.student.groupBy({
    by: ['class'],
    _count: { id: true },
    where: {
      jobId: null
    },
    orderBy: {
      _count:{
        id: 'desc'
      }
    }
  })

  console.log(result2)
})
