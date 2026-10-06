export class LoginView {
  constructor() {
    this.app = document.getElementById('app');
  }

  render() {
    this.app.innerHTML = `
    <div class="login-page">
      <!-- Detalhe de iluminação sutil no fundo -->
      <div class="ambient-glow"></div>

      <main class="login-card">
        <!-- Cabeçalho / Logo -->
        <div class="login-header">
          <div class="app-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h1 class="title">Entrar na plataforma</h1>
          <p class="subtitle">Insira suas credenciais para continuar</p>
        </div>

        <!-- Formulário -->
        <form id="login-form" class="login-form" novalidate>
          <!-- Campo E-mail -->
          <div class="field-group">
            <label for="email">E-mail corporativo</label>
            <div class="input-wrapper">
              <span class="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="usuario@empresa.com" 
                required 
                autocomplete="username"
              />
            </div>
          </div>

          <!-- Campo Senha -->
          <div class="field-group">
            <div class="field-header">
              <label for="password">Senha</label>
              <a href="#recuperar-senha" class="forgot-link">Esqueceu a senha?</a>
            </div>
            <div class="input-wrapper">
              <span class="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••••••" 
                required 
                autocomplete="current-password"
              />
            </div>
          </div>

          <!-- Botão de Ação -->
          <button type="submit" class="submit-btn" id="btn-submit">
            <span>Acessar painel</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </form>

        <!-- Rodapé do Card -->
        <footer class="card-footer">
          <p>Precisa de suporte? <a href="#">Fale com o administrador</a></p>
        </footer>
      </main>
    </div>
  `;

    this.form = document.getElementById('login-form');
    this.emailInput = document.getElementById('email');
    this.passwordInput = document.getElementById('password');
    this.submitBtn = document.getElementById('btn-submit');
    this.errorEl = document.getElementById('error-message');
  }

  bindSubmit(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.clearError();

      const email = this.emailInput.value.trim();
      const password = this.passwordInput.value;

      handler({ email, password });
    });
  }

  showError(message) {
    this.errorEl.textContent = message;
  }

  clearError() {
    this.errorEl.textContent = '';
  }
}