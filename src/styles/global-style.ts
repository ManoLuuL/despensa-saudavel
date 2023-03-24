import { createGlobalStyle } from "styled-components";
import { Rotate360 } from "./animations-keyframes";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans', 'sans-serif';
    font-size: ${(p) => p.theme.fontSizes.normal};

    padding: 0;
    margin: 0;
  }

  .p-overlaypanel-content {
    padding: 0.75rem !important;
  }

  .p-float-label textarea ~ label{
    margin-top: -0.5rem !important;
  }
  .p-float-label textarea.p-filled ~ label {
    margin-top: 0 !important;
  }

  .p-float-label textarea:focus ~ label {
    margin-top: 0 !important;
  }

  .p-dropdown-panel {
    .p-dropdown-header {
      .p-dropdown-filter-container{
        input{
          // o calc é necessário pois o fontSize é ignorado aqui, sendo assim, somar 0.2rem no top e no bottom deixa o input com o tamanho ideal
          // 1.8rem é utilizado pra espaçar o texto do input no icon se search da direita
          padding: 0.75rem
        }
      }
    }
  }

  .p-menu.p-menu-overlay.p-component,
  .p-overlaypanel-content {
    padding: 0 !important;
  }

  .p-overlaypanel {
    :before {
        content:none;
    }

    :after {
        content:none;
    }
  }

  .rotate {
    animation: ${Rotate360} 600ms infinite;
  }

  .modal-no-header {
    .p-dialog-header {
      display: none;
    }

    & > {
      .p-dialog-content {
        border-top-right-radius: ${(p) => p.theme.borderRadii.lg} !important;
        border-top-left-radius: ${(p) => p.theme.borderRadii.lg} !important;
      }
    }
  }

  .p-dialog {
    .p-dialog-header {
      border-top-right-radius: ${(p) => p.theme.borderRadii.lg} !important;
      border-top-left-radius: ${(p) => p.theme.borderRadii.lg} !important;
    }

    .p-dialog-content:last-of-type {
      border-bottom-right-radius: ${(p) => p.theme.borderRadii.lg} !important;
      border-bottom-left-radius: ${(p) => p.theme.borderRadii.lg} !important;
    }
  }

`;
