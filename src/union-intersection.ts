type NoobDeveloper = {
    name: string;
}
type JuniorDeveloper = NoobDeveloper & {
    experience: number;
    expertise: string;
}

const developer : JuniorDeveloper & {
    name: "Shakib Hossain",
    experience: 2,
    expertise: "JavaScript"
}