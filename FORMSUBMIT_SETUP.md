# How FormSubmit Token Is Linked to Your Inboxes

## How it works

1. **The token**  
   `eb2c55da05c400dcf072acb40ab0eb41` is a FormSubmit “invisible email” token.  
   It was sent to **one** of your addresses when that address was first used (or confirmed) with FormSubmit.  
   That address is the **primary recipient**: it receives every submission as the main “To” recipient.

2. **The second inbox**  
   Your form already includes a **CC** field so the other address also gets every submission:
   - `_cc` is set to: `joemarbragas123@gmail.com,elrichtrading2006@gmail.com`  
   So both inboxes receive each request; one as main recipient (tied to the token), one (or both) via CC.

## You don’t need to “link” anything else

- The token is already tied to the inbox that confirmed it.
- The `_cc` value in your form sends a copy to both addresses every time.

So as long as:
- the form uses the token in the action (and in the script), and  
- the hidden `_cc` field is present with both emails,  

submissions will go to both **joemarbragas123@gmail.com** and **elrichtrading2006@gmail.com**.

## If you ever get a new token

1. Someone submits the form (or you use the form with a **new** email in the FormSubmit URL).
2. FormSubmit sends a **confirmation email** to that address.
3. That address clicks the **activation link** in the email.
4. FormSubmit then sends a **token** (a string like `eb2c55da05c400dcf072acb40ab0eb41`) to that same address.
5. You replace the old token in:
   - the form `action`:  
     `action="https://formsubmit.co/NEW_TOKEN"`
   - and in `script.js` where `FORMSUBMIT_TOKEN` is set.

The token is always “linked” to the inbox that confirmed it; no separate linking step is required.

## Summary

- **Token** = linked to the one email that confirmed it (primary recipient).  
- **`_cc`** = sends a copy to both `joemarbragas123@gmail.com` and `elrichtrading2006@gmail.com`.  
- With your current form and script, both inboxes already receive submissions; no extra setup is needed.
