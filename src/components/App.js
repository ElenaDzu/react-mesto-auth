import { React, useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import * as ApiAuth from "../utils/ApiAuth.js";
import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { api } from "../utils/Api.js";
import Header from "./Header.js";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import InfoTooltipPopup from "./InfoTooltipPopup.js";

function App() {
  const [userInfo, setUserInfo] = useState({
    email: "",
  });
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(false);

  const [infoStatus, setInfoStatus] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }

    ApiAuth.getContent(jwt)
      .then(({ data: { email } }) => {
        setUserInfo({ email });
        setIsLoggedIn(true);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  tokenCheck();

  const onLogin = (data) => {
    return ApiAuth.authorize(data)
      .then(({ token }) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", token);
        tokenCheck();
        history.push("/");
        return;
      })
      .catch((e) => {
        setInfoStatus("fail");
      });
  };

  const onRegister = (data) => {
    return ApiAuth.register(data)
      .then(() => {
        setInfoStatus("success");
        history.push("/sign-in");
      })
      .catch((e) => {
        setInfoStatus("fail");
      });
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/sign-in");
  };

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((currentUser) => {
          setCurrentUser(currentUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleRegisterSubmit() {
    setInfoTooltipPopup(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
    setInfoStatus(false);
  }

  function handleUpdateUser({ name, about }) {
    api
      .setUserInfo(name, about)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setAvatar(avatar)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlace({ name, link }) {
    api
      .postCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getInitialCards()
        .then((cards) => {
          setCards(cards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
        <div className="page">
          <Header userInfo={userInfo} onLogout={onLogout} />
          <Switch>
          <ProtectedRoute
              exact
              path="/"
              loggedIn={isLoggedIn}
              component={Main}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
            />
            <Route path="/sign-in">
              <Login onLogin={onLogin} />
            </Route>
            <Route path="/sign-up">
              <Register onRegister={onRegister} />
            </Route>
          </Switch>
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

        <InfoTooltipPopup infoStatus={infoStatus} onClose={closeAllPopups} />

        <PopupWithForm
          isOpen={false}
          onClose={closeAllPopups}
          title="Вы уверены?"
          name="confirm-removal"
        >
          <input type="submit" defaultValue="Да" className="popup__save-btn" />
        </PopupWithForm>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
