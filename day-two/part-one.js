
export const submarinePilotPartOne = (input) => {
	const result = input.reduce((obj, x) => {
		const [direction, value] = x.split(' ')
		const num = Number(value)
		switch (direction) {
			case 'forward':
				obj.x += num
				break
			case 'down':
				obj.y += num
				break
			case 'up':
				obj.y -= num
			default:
				break
		}

		return obj
	}, {
		x: 0,
		y: 0,
	})
	return result.x * result.y
}