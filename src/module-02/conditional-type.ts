type one = number
type two = undefined

type three = one extends null ? true : false
type four = one extends null ? true : two extends undefined ? true : false


type Me = {
    bike : string
    car : string
    ship :string
}
type CheckVehicle<T> = T extends keyof Me ? true : false


type HasShip = CheckVehicle<'ship'>
type HasBus = CheckVehicle<'bus'>