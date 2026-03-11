/**
 * Capa Dominio: datos del plan de estudio (sobrecarga progresiva B1–C1).
 * Solo datos; sin lógica de UI ni estado.
 */

export const studyPlan = {
    phase1: {
        id: 'phase1',
        title: "Fase 1: Consolidación B1+ (Semanas 1-4)",
        description: "Objetivo: Acostumbrar al cerebro al inglés diario sin abrumarlo. Consolidar lo que ya sabes y ganar confianza.",
        days: {
            0: {
                name: "Lunes", focus: "Listening General",
                tasks: [
                    { id: "p1-m1", text: "Escuchar un podcast educativo de 10 min (ej. BBC 6 Minute English)." },
                    { id: "p1-m2", text: "Identificar la idea principal general (sin preocuparse por cada palabra)." },
                    { id: "p1-m3", text: "Anotar 2-3 palabras nuevas que se repitan mucho." }
                ],
                tip: "En esta fase, la meta es la supervivencia auditiva. Si entiendes el 60% del mensaje general, es un éxito."
            },
            1: {
                name: "Martes", focus: "Reading Corto",
                tasks: [
                    { id: "p1-t1", text: "Leer una noticia corta sobre un tema que te guste (deportes, tecnología)." },
                    { id: "p1-t2", text: "Leer una vez rápido para el contexto, y una segunda vez más lento." }
                ],
                tip: "Usa el contexto para adivinar palabras antes de ir al traductor."
            },
            2: {
                name: "Miércoles", focus: "Writing (Oraciones)",
                tasks: [
                    { id: "p1-w1", text: "Escribir 5 oraciones resumen sobre la noticia del martes." },
                    { id: "p1-w2", text: "Asegurarte de usar correctamente los tiempos verbales básicos (pasado, presente)." }
                ],
                tip: "Concéntrate en la precisión de lo básico antes de intentar sonar 'poético'."
            },
            3: {
                name: "Jueves", focus: "Speaking (Fluidez básica)",
                tasks: [
                    { id: "p1-th1", text: "Hablar solo frente al espejo por 2 minutos sobre qué hiciste hoy." },
                    { id: "p1-th2", text: "Si te trabas, busca otra forma de decirlo con palabras sencillas." }
                ],
                tip: "El objetivo es no detenerse. Permítete cometer errores gramaticales mientras mantengas el ritmo."
            },
            4: {
                name: "Viernes", focus: "Vocabulario (Temático)",
                tasks: [
                    { id: "p1-f1", text: "Aprender 5 palabras nuevas de una categoría (ej. trabajo, viajes)." },
                    { id: "p1-f2", text: "Escribir un ejemplo personal con cada una." }
                ],
                tip: "La memoria funciona por asociación. Relaciona las palabras con cosas de tu vida."
            },
            5: {
                name: "Sábado", focus: "Inmersión Pasiva",
                tasks: [
                    { id: "p1-s1", text: "Ver un episodio de serie (sitcom 20 min) con subtítulos en inglés." }
                ],
                tip: "Si te cansas, pausa. Es inmersión pasiva, debe ser disfrutable."
            },
            6: {
                name: "Domingo", focus: "Descanso y Plan",
                tasks: [
                    { id: "p1-su1", text: "Revisar tus notas de la semana por 5 minutos." },
                    { id: "p1-su2", text: "Planear el horario para la siguiente semana." }
                ],
                tip: "Crea el hábito. La disciplina de revisar el domingo garantiza el éxito del lunes."
            }
        }
    },
    phase2: {
        id: 'phase2',
        title: "Fase 2: Expansión B2 (Semanas 5-12)",
        description: "Objetivo: Aumentar la duración y complejidad. Empezar a tratar temas abstractos, opiniones y usar estructuras más nativas (phrasal verbs).",
        days: {
            0: {
                name: "Lunes", focus: "Listening Específico",
                tasks: [
                    { id: "p2-m1", text: "Escuchar una charla TED de 15-20 min sobre un tema no familiar." },
                    { id: "p2-m2", text: "Tomar notas de la estructura de la charla (introducción, argumentos, conclusión)." },
                    { id: "p2-m3", text: "Hacer 'Shadowing' (repetir imitando) de 2 minutos clave." }
                ],
                tip: "Aquí empezamos a enfocarnos en la entonación y cómo conectan las palabras (connected speech)."
            },
            1: {
                name: "Martes", focus: "Reading Analítico",
                tasks: [
                    { id: "p2-t1", text: "Leer un artículo de opinión o ensayo de The Guardian/NYT." },
                    { id: "p2-t2", text: "Subrayar conectores lógicos (However, Furthermore, In spite of)." },
                    { id: "p2-t3", text: "Identificar el tono del autor (sarcástico, formal, persuasivo)." }
                ],
                tip: "Céntrate en CÓMO el autor estructura sus ideas, no solo en qué dice."
            },
            2: {
                name: "Miércoles", focus: "Writing (Párrafos y Conectores)",
                tasks: [
                    { id: "p2-w1", text: "Escribir 2 párrafos (200 palabras) argumentando a favor o en contra del artículo de ayer." },
                    { id: "p2-w2", text: "Integrar al menos 3 de los conectores lógicos que subrayaste el martes." }
                ],
                tip: "Evita usar 'and', 'but', 'because' todo el tiempo. Busca sinónimos de nivel B2."
            },
            3: {
                name: "Jueves", focus: "Speaking (Argumentación)",
                tasks: [
                    { id: "p2-th1", text: "Grabar una nota de voz de 3 minutos explicando tu opinión sobre un tema controversial." },
                    { id: "p2-th2", text: "Escuchar la grabación y anotar 2 muletillas que repitas mucho para evitarlas." }
                ],
                tip: "El nivel B2 requiere que puedas justificar tus opiniones con claridad y fluidez."
            },
            4: {
                name: "Viernes", focus: "Vocabulario (Phrasal Verbs)",
                tasks: [
                    { id: "p2-f1", text: "Aprender 3 Phrasal Verbs e introducirlos en Anki/Flashcards." },
                    { id: "p2-f2", text: "Crear un mini-diálogo escrito usándolos en contexto." }
                ],
                tip: "Los phrasal verbs son el alma del inglés hablado. Aprenderlos en contexto es la única forma."
            },
            5: {
                name: "Sábado", focus: "Inmersión Extensa",
                tasks: [
                    { id: "p2-s1", text: "Ver una película completa O escuchar un podcast nativo de 45 min." },
                    { id: "p2-s2", text: "Intentar periodos de 10 minutos sin mirar los subtítulos." }
                ],
                tip: "Retira las 'ruedas de entrenamiento' (subtítulos) poco a poco."
            },
            6: {
                name: "Domingo", focus: "Revisión Activa",
                tasks: [
                    { id: "p2-su1", text: "Hacer un test corto en línea de nivel B2 (solo para ver áreas débiles)." },
                    { id: "p2-su2", text: "Leer por placer 15 min." }
                ],
                tip: "Medir el progreso te mantendrá motivado en esta etapa media, que suele ser la más larga."
            }
        }
    },
    phase3: {
        id: 'phase3',
        title: "Fase 3: Refinamiento C1 (Semanas 13-24)",
        description: "Objetivo: Dominio. Comprender lenguaje implícito, humor, acentos difíciles y producir textos estructurados y precisos casi al nivel nativo.",
        days: {
            0: {
                name: "Lunes", focus: "Listening Nativo Complejo",
                tasks: [
                    { id: "p3-m1", text: "Escuchar un podcast nativo conversacional rápido (ej. Joe Rogan, The Daily)." },
                    { id: "p3-m2", text: "Identificar sarcasmo, bromas internas o referencias culturales." },
                    { id: "p3-m3", text: "Entender acentos diferentes (británico, australiano, escocés)." }
                ],
                tip: "El C1 implica entender 'entre líneas', no solo la traducción literal."
            },
            1: {
                name: "Martes", focus: "Reading Técnico/Literario",
                tasks: [
                    { id: "p3-t1", text: "Leer papers académicos, literatura clásica o reportes técnicos de tu industria." },
                    { id: "p3-t2", text: "Extraer vocabulario altamente específico y expresiones idiomáticas (Idioms)." }
                ],
                tip: "Exponte a registros del idioma muy variados, desde lo híper formal hasta lo poético."
            },
            2: {
                name: "Miércoles", focus: "Writing C1 (Estructura Avanzada)",
                tasks: [
                    { id: "p3-w1", text: "Redactar un ensayo corto o un reporte profesional (300+ palabras)." },
                    { id: "p3-w2", text: "Utilizar estructuras avanzadas: Inversiones (Rarely do I...), Condicionales mixtos, Pasiva." },
                    { id: "p3-w3", text: "Pasarlo por ChatGPT/Grammarly pidiendo 'Mejora este texto a nivel C1'." }
                ],
                tip: "El C1 se trata de la 'elegancia' gramatical y elegir la palabra precisa (nuance)."
            },
            3: {
                name: "Jueves", focus: "Speaking (Debate e Improvisación)",
                tasks: [
                    { id: "p3-th1", text: "Tomar un tema complejo (ej. IA en la sociedad) y hablar 5 min improvisados." },
                    { id: "p3-th2", text: "Usar expresiones para ganar tiempo ('Well, that's an interesting point...') y para matizar ('To some extent...')." }
                ],
                tip: "Debes poder hablar largo y tendido sobre temas que no preparaste previamente."
            },
            4: {
                name: "Viernes", focus: "Vocabulario (Idioms y Collocations)",
                tasks: [
                    { id: "p3-f1", text: "Aprender 5 'Collocations' (palabras que suelen ir juntas, ej. 'highly controversial' no 'very controversial')." },
                    { id: "p3-f2", text: "Aprender 2 Idioms nativos." }
                ],
                tip: "Las collocations son el secreto para sonar natural y menos 'robótico' o de libro de texto."
            },
            5: {
                name: "Sábado", focus: "Inmersión Total (Sin filtros)",
                tasks: [
                    { id: "p3-s1", text: "Ver contenido 100% sin subtítulos." },
                    { id: "p3-s2", text: "Escuchar Stand-up Comedy en inglés (es la prueba máxima de comprensión cultural y lingüística)." }
                ],
                tip: "El humor es lo último que se entiende en otro idioma. Si entiendes chistes, estás en C1."
            },
            6: {
                name: "Domingo", focus: "Uso Real",
                tasks: [
                    { id: "p3-su1", text: "Interactuar en comunidades (Reddit, Discord) escribiendo respuestas largas." },
                    { id: "p3-su2", text: "Leer un libro 100% en inglés sin buscar palabras a menos que impidan entender la trama." }
                ],
                tip: "El inglés deja de ser un tema de estudio y se convierte completamente en una herramienta para vivir."
            }
        }
    }
};
