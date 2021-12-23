import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { sampleActionRequest, sampleActionSuccess } from './actions';
import { ActionTypeEnum } from 'types/enums';
import { Apis } from 'api/services';
import { AxiosResponse } from 'axios';
import { ISampleResDTO } from 'types/DTO/Sample';

function* sampleRequest({ payload, meta }: ReturnType<typeof sampleActionRequest>) {
	try {
		const response: AxiosResponse<ISampleResDTO['data']> = yield call(Apis.getSampleList, payload);

		yield delay(5000);
		yield put(sampleActionSuccess(response.data));
	} catch (error) {
		// handle errors
		// create new action for error loading and show message error
	}
}

export default function* rootSaga() {
	yield all([takeLatest(ActionTypeEnum.sampleRequest, sampleRequest)]);
}
