import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post(
    "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/login",
    (req, res, ctx) => {
      // Persist user's authentication in the session
      sessionStorage.setItem("is-authenticated", "true");

      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          loggedIn: true,
          token:
            "kd8hVmOk=WTY5Rh9NGgw-tts7LQx6i-!zhFEBu64IpRQ2jqtDaiPpgMiqaNLa?qY",
        })
      );
    }
  ),

  // Handles a GET /user request
  rest.get("/user", null),
];
