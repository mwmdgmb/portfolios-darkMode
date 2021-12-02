import { ActionType } from 'types/interface/actionType';
import { ISampleReqDTO, ISampleResDTO } from 'types/DTO/Sample';
import { ActionTypeEnum } from 'types/enums';

/**
 *
 * @param payload none
 * @returns get list
 */
export const sampleActionRequest: ActionType<ActionTypeEnum.sampleRequest, ISampleReqDTO> =
	payload => ({
		type: ActionTypeEnum.sampleRequest,
		payload,
	});

export const sampleActionSuccess: ActionType<ActionTypeEnum.sampleSuccess, ISampleResDTO> =
	payload => ({
		type: ActionTypeEnum.sampleSuccess,
		payload,
	});

export const changeTheme: ActionType<ActionTypeEnum.changeThemeSuccess, string> = payload => ({
	type: ActionTypeEnum.changeThemeSuccess,
	payload,
});

type TSampleAction =
	| ReturnType<typeof sampleActionRequest>
	| ReturnType<typeof sampleActionSuccess>
	| ReturnType<typeof changeTheme>;

export default TSampleAction;
