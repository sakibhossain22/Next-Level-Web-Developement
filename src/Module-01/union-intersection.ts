type NoobDeveloper = {
    name: string;
}
type JuniorDeveloper = NoobDeveloper & {
    experience: number;
    expertise: string;
}
enum Level {
    Noob = "Noob",
    Junior = "Junior",
    Senior = "Senior"
}
type SeniorDeveloper = JuniorDeveloper & {
    leadershipExportise: number;
    level: Level;
}
const developer :NoobDeveloper| JuniorDeveloper = {
    name: "Shakib Hossain",
    experience: 2,
    expertise: "JavaScript"
}
const seniorDeveloper: SeniorDeveloper = {
    name: "Shakib Hossain",
    experience: 5,
    expertise: "JavaScript",
    leadershipExportise: 3;
    level: Level.Senior}