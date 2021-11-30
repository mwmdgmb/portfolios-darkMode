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

export const sampleActionSuccess: ActionType<ActionTypeEnum.sampleSuccess, ISampleResDTO['data']> =
	payload => ({
		type: ActionTypeEnum.sampleSuccess,
		payload,
	});

type TSampleAction =
	| ReturnType<typeof sampleActionRequest>
	| ReturnType<typeof sampleActionSuccess>;

export default TSampleAction;
