import {TentativeLoad} from "./tentativeLoad";
import {PersedFile} from "./parse";
import {Instruction, ParseError} from "./types";

export const initialAddress = 0x1482e8d4|0;

export interface Program {
	resolveLabel(label: string): number | null;

	readNX(address: number): [number, Instruction] | null;
}

export function linker(files: PersedFile[]): Program {
	if (files.length == 1) {
		return TentativeLoad.from(initialAddress, files[0].instructions);
	}
	throw new ParseError("Linking multiple files is not yet implemented");
}
