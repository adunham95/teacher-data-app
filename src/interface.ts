export interface GroupInterface{
    groupName: string,
    color: string,
    id: string
}

export interface StudentInterface{
    firstName: string,
    lastName: string,
    id: string,
    groupID?: [string],
    groups: Array<GroupInterface>
    skillData: Array<SkillInterface>
}

export interface SkillInterface{
    skillName: string,
    skillDate: string,
    skillScore: number,
    skillNotes: string
}
