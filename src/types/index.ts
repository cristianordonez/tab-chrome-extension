export type DOMMessage = {
   type: 'GET_DOM';
};

export type DOMMessageResponse = {
   title: string;
   headlines: string[];
};

export type Theme = {
   colors: {
      primary: string;
      secondary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      error: string;
      button: string;
      success: string;
      black: string;
   };
   font: string;
};
