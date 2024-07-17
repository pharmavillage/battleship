import React from 'react';
import {Text} from 'ink';
import {GradientText} from 'battleship-out';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	return (
		<>
			<GradientText />
			<Text>
				Hello, <Text color="green">{name}</Text>
			</Text>
		</>
	);
}
