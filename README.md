# Proyecto C1 – Plan Evolutivo (B1 → C1)

Sitio estático: plan de estudio por fases y días. Se despliega en **GitHub Pages** con GitHub Actions.
 
## Cómo tenerlo corriendo en GitHub

1. **Crea un repositorio** en GitHub (por ejemplo `English-tutor`). No inicialices con README si ya tienes código local.

2. **Activa GitHub Pages con Actions**  
   En el repo: **Settings → Pages**. En "Build and deployment", **Source** elige **GitHub Actions**.

3. **Sube el código** (si aún no tienes git inicializado):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/English-tutor.git
   git push -u origin main
   ```

4. El workflow **Deploy to GitHub Pages** se ejecutará en cada push a `main`. La primera vez puede tardar un minuto. La URL del sitio será:

   `https://TU_USUARIO.github.io/English-tutor/`

(En **Settings → Pages** o en la pestaña **Actions** verás el enlace cuando el despliegue termine.)

## Probar en local

Los módulos ES necesitan un servidor. Por ejemplo:

```bash
npx serve .
```

Luego abre la URL que muestre (p. ej. `http://localhost:3000`).
