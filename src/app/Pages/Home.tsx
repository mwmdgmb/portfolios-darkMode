import LanguageBtn from 'components/common/ChangeLanguage';
import { useLanguage } from 'hooks/useLanguage';
import React from 'react';

const HomePage = () => {
	const { t } = useLanguage();

	const texts = {
		paragraph: t('sample.paragraph'),
	};

	return (
		<>
			<LanguageBtn />
			{texts.paragraph}
		</>
	);
};

export default HomePage;
