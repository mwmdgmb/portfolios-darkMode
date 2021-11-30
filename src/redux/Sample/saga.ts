import { all, call, put, takeLatest } from 'redux-saga/effects';
import { sampleActionRequest, sampleActionSuccess } from './actions';
import { ActionTypeEnum } from 'types/enums';
import { Apis } from 'api/services';
import { AxiosResponse } from 'axios';
import { ISampleResDTO } from 'types/DTO/Sample';

function* sampleRequest({ payload, meta }: ReturnType<typeof sampleActionRequest>) {
	try {
		const response: AxiosResponse<ISampleResDTO> = yield call(Apis.getSampleList, payload, {
			loading: true,
		});

		console.log('response', response);
		// yield put(sampleActionSuccess())
	} catch (error) {
		// handle errors
	}
}

export default function* rootSaga() {
	yield all([takeLatest(ActionTypeEnum.sampleRequest, sampleRequest)]);
}
