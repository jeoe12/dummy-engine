/**
 * Created by dummy team
 * 2017-09-08
 */

function ErrorCode() {
    this.SUCCESS = {
        code: 0,
        cause: "Success"
    };
    this.SESSION_TIMEOUT = {
        code: 2,
        cause: 'Session timeout or token illegal'
    };
    this.FAILED = {
        code: -1,
        cause: "System encountered an error, please try again later."
    };
    this.WRONG_ENV = {
        code: -2,
        cause: "Wrong environment"
    };
    this.AUTHENTICATION_FAILURE = {
        code: -3,
        cause: "Player validation failure"
    };

    this.PLAYER_EXIST = {
        code: 1,
        cause: "Player already exist."
    };

    this.WRONG_VERIFICATION_CODE = {
        code: -4,
        cause: "Wrong Verification Code."
    }

    this.MULTI_ACTIVE_BOARD_CREATED = {
        code: 1,
        cause: "multi active boards in a game are created by a player "
    }
    this.LOGIN_FAILURE ={
        code: -5,
        cause:"Wrong phoneNumber or password."
    }
}

module.exports = ErrorCode;