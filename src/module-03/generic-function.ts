const makeNewArray = <S, L>(param1: S, param2: L): [S, L] => {
    return [param1, param2]
}

const result = makeNewArray<string, string>('Bangladesh', 'i love my country')
const result2 = makeNewArray<number, number>(55, 54)
const result3 = makeNewArray<number, boolean>(55, true)