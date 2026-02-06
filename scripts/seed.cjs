const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main(){
  try{
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Engineering" },
        { name: "Mathematics" },
        { name: "Business & Finance" },
        { name: "Accounting" },
        { name: "Science" },
        { name: "Medicine & Healthcare" },
        { name: "Law & Legal Studies" },
        { name: "Architecture & Design" },
        { name: "Environmental Science" },
        { name: "Music" },
        { name: "Photography" },
        { name: "Graphic Design" },
        { name: "Filming" },
        { name: "Creative Writing" },
        { name: "Fine Arts" },
        { name: "Fashion Design" },
        { name: "Game Development" },
        { name: "Web Development" },
        { name: "Mobile App Development" },
        { name: "Cloud Computing" },
        { name: "Blockchain" },
        { name: "UI/UX Design" },
        { name: "IT Certifications" },
        { name: "Personal Finance" },
        { name: "Productivity" },
        { name: "Public Speaking" },
        { name: "Psychology" },
        { name: "Languages" },
        { name: "Parenting" },
        { name: "Cooking" },
        { name: "Fitness" },
        { name: "Yoga & Meditation" },
        { name: "Nutrition" },
        { name: "Sports Training" },
        { name: "Martial Arts" },
        { name: "Automotive Repair" },
        { name: "Electrician & Plumbing" },
        { name: "Carpentry" },
        { name: "Agriculture" },
        { name: "Aviation" },
        { name: "Test Prep" },
        { name: "Career Development" },
        { name: "Digital Marketing" },
        { name: "Real Estate" },
        { name: "History" },
        { name: "Philosophy" },
        { name: "Other" }
      ]
    });
    console.log('Categories seeded successfully');
  }catch(err){
    console.error('Error seeding categories', err);
  }finally{
    await database.$disconnect();
  }
}

main();
