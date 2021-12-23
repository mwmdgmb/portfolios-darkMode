import { IMainResponseDto } from 'types/interface/IMainResponseDTO';

type TResult = {
	email: string;
	id: number | null;
	name: string;
	phone: string;
	username: string;
	website: string;
	address?: Record<string, any>;
	company?: Record<string, any>;
};

interface ISampleResDTO extends IMainResponseDto {
	data: TResult[];
}

export type { ISampleResDTO };
