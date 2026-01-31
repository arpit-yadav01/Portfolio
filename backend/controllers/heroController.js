import Hero from "../models/Hero.js";

/* GET HERO (PUBLIC) */
export const getHero = async (req, res) => {
  let hero = await Hero.findOne();

  // if not exists, create default
  if (!hero) {
    hero = await Hero.create({
      name: "Arpit Yadav",
      title: "Full Stack Developer • AI Enthusiast",
      description:
        "I build scalable web applications and love working on backend systems, AI, and real-world products.",
      resumeUrl: "/resume/arpit-yadav-resume.pdf",
    });
  }

  res.json(hero);
};

/* UPDATE HERO (ADMIN) */
export const updateHero = async (req, res) => {
  const hero = await Hero.findOne();

  if (!hero) {
    const created = await Hero.create(req.body);
    return res.json(created);
  }

  hero.name = req.body.name;
  hero.title = req.body.title;
  hero.description = req.body.description;
  hero.resumeUrl = req.body.resumeUrl;

  await hero.save();
  res.json(hero);
};
