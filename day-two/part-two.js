
export const submarinePilotPartTwo = (input) => {
	const result = input.reduce((obj, x) => {
		const [direction, value] = x.split(' ')
    const num = Number(value)
		switch (direction) {
			case 'forward':
				obj.x += num
        obj.y += (obj.aim * num)
				break
			case 'down':
        obj.aim += num
				break
			case 'up':
        obj.aim -= num
			default:
				break
		}

		return obj
	}, {
		x: 0,
		y: 0,
    aim: 0,
	})
	return result.x * result.y
}