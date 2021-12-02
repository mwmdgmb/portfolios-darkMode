import { IMainResponseDto } from 'types/interface/IMainResponseDTO';

interface ISampleResDTO extends IMainResponseDto {
	config: any;
	data: any;
	headers: any;
	request: any;
	status: number;
	statusText: string;
}

export type { ISampleResDTO };
