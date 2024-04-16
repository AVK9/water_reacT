import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import {
  StyledSwitcherContainer,
  StyledSelect,
  StyledOptionEn,
  StyledOptionUa,
  StyledOptionList,
} from './LanguageSwitcher.styled';

import enFlag from '../../assets/img/flag_en.png';
import uaFlag from '../../assets/img/flag_ua.png';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    Cookies.get('lang') || 'en'
  );
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    i18n.changeLanguage(selectedOption);
  }, [selectedOption, i18n]);

  const toggling = () => {
    setIsOpen(!isOpen);
    setOpacity(isOpen ? 0 : 1);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setOpacity(0);
    Cookies.set('lang', value);
  };

  return (
    <StyledSwitcherContainer>
      <StyledSelect onClick={toggling}>
        <img src={selectedOption === 'en' ? enFlag : uaFlag} alt="flag" />
      </StyledSelect>
      <StyledOptionList
        style={{ opacity: opacity, transition: 'opacity 0.5s' }}
      >
        <StyledOptionEn onClick={onOptionClicked('en')}>
          <img src={enFlag} alt="English" />
        </StyledOptionEn>
        <StyledOptionUa onClick={onOptionClicked('ua')}>
          <img src={uaFlag} alt="Ukrainian" />
        </StyledOptionUa>
      </StyledOptionList>
    </StyledSwitcherContainer>
  );
}

export default LanguageSwitcher;
