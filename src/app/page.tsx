"use client"
import { CopyIcon } from "@/components/CopyIcon"
import { ChangeEvent, useState } from "react"

export default function Home() {
	const [password, setPassword] = useState<string>("testPassword")
	const [characterLength, setCharacterLength] = useState<string>("10")

	const changeCharacterLength = (event: ChangeEvent<HTMLInputElement>) => {
		setCharacterLength(event.target.value)
	}

	return (
		<div className="h-screen w-full bg-neutral-900 text-gray-400 flex justify-center">
			<div className="flex flex-col justify-center items-center gap-10 h-full">
				<p className="text-2xl">Password Generator</p>
				<div className="bg-dark-grey min-h-[100px] flex items-center justify-between p-5 max-w-[500px]">
					<input
						type="text"
						className="bg-dark-grey h-1/2 text-3xl w-1/2"
						disabled
						value={password}
					/>
					<CopyIcon />
				</div>
				<div className="bg-dark-grey max-w-[500px] max-h-[600px] h-1/2 w-full pl-5 pr-5 pt-8 flex flex-col gap-8">
					<div className="flex text-2xl justify-between">
						<p className="">Character Length</p>
						<p className="text-[#a4ffaf]">{characterLength}</p>
					</div>
					<input
						id="slider"
						type="range"
						min="0"
						max="20"
						value={characterLength}
						onChange={changeCharacterLength}
						step="1"
						className="h-2"
					/>
				</div>
			</div>
		</div>
	)
}
