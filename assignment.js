        function feetToMile(feet) {
            if (feet < 0) {
                return 'Feet can not be negative'
            }
            else {
                var mile = feet / 5280;
                return mile
            }
        }


        function woodCalculator(chair, table, bed) {
            if (chair < 0 || table < 0 || bed < 0) {
                return 'Input  can not be negative'
            }
            else {
                var totalWood = chair + table * 3 + bed * 5
                return totalWood
            }
        }


        function brickCalculator(floor) {
            if (floor < 0) {
                return 'Floor can not be negative'
            }
            else {
                if (floor <= 10) {
                    return floor * 15 * 1000
                }
                else if (floor <= 21) {
                    var floorCalculate = floor - 10;
                    return 10 * 15 * 1000 + floorCalculate * 12 * 1000
                }

                else {
                    var floorCalculate = floor - 20;
                    return 10 * 15 * 1000 + 10 * 12 * 1000 + floorCalculate * 10 * 1000
                }
            }

        }

        function tinyFriend(arr) {
            if (arr.length <= 0) {
                return 'Array can not be empty'
            }
            else {
                small = arr[0]
                for (var i = 0; i < arr.length; i++) {
                    var element = arr[i]
                    if (element.length < small.length) {
                        small = element
                    }
                }
                return small
            }
        }
        var friend = ["abir", "abdullah", "robin", "abdurrohim", "aliraz"]


        console.log(feetToMile(5280 * 6))
        console.log(woodCalculator(5, 5, 5))
        console.log(brickCalculator(22))
        console.log(tinyFriend(friend))


