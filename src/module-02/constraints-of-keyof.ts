type MyDetails = {
    name: string
    age: number
    gender: string
}

const detailsData: MyDetails = {
    name: 'Shakib Hossain',
    age: 22,
    gender: "Male"
}

type newData = keyof MyDetails

const findMyInfo = <S, L extends keyof S > (obj: S, key: L) => {
    return obj[key]
}

const resultData = findMyInfo(detailsData, 'gender')