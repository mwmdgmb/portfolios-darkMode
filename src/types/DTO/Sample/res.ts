import { IMainResponseDto } from "types/interface/IMainResponseDTO";

interface ISampleResDTO extends IMainResponseDto {
	data: Record<string, any>[];
}

export type {ISampleResDTO}
