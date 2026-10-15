import { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Trophy, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { generateQuiz, type QuizQuestion } from '@/data/quiz';

type Stage = 'start' | 'playing' | 'result';

export function Quiz() {
  const [stage, setStage] = useState<Stage>('start');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  // Embaralha as opções de cada pergunta preservando a resposta correta
  const currentQuestion = useMemo(() => {
    if (questions.length === 0) return null;
    return questions[currentIndex];
  }, [questions, currentIndex]);

  const startQuiz = () => {
    const newQuestions = generateQuiz();
    // Para cada pergunta, embaralhamos as opções
    const shuffled = newQuestions.map((q) => {
      const correctText = q.options[q.correct];
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      const newCorrectIndex = shuffledOptions.indexOf(correctText);
      return { ...q, options: shuffledOptions, correct: newCorrectIndex };
    });
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setStage('playing');
  };

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === currentQuestion!.correct;
    if (isCorrect) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setStage('result');
    }
  };

  const restart = () => {
    setStage('start');
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
  };

  const scoreMessage = (s: number, total: number) => {
    const pct = (s / total) * 100;
    if (pct === 100) return { title: 'Parabéns! Pontuação máxima!', msg: 'Você domina o assunto! Compartilhe seu conhecimento com amigos e vizinhos.', emoji: '🏆' };
    if (pct >= 75) return { title: 'Muito bem!', msg: 'Você tem um ótimo conhecimento sobre reciclagem. Continue assim e ajude a conscientizar mais pessoas.', emoji: '🌟' };
    if (pct >= 50) return { title: 'Bom começo!', msg: 'Você já sabe bastante, mas ainda há o que aprender. Reveja as seções do site e tente novamente.', emoji: '👍' };
    return { title: 'Vamos aprender mais!', msg: 'Não desanime! Navegue pelas seções do site e descubra como a reciclagem é simples e importante.', emoji: '📚' };
  };

  // === TELA INICIAL ===
  if (stage === 'start') {
    return (
      <section id="quiz" className="section-padding bg-gradient-to-br from-brand-50 to-beige-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Quiz Educativo</h2>
          <p className="section-subtitle mx-auto text-center">
            Teste seus conhecimentos sobre reciclagem, descarte consciente, economia sustentável
            e saúde ambiental. A cada nova tentativa, as perguntas mudam!
          </p>

          <div className="card mt-8 bg-white">
            <div className="w-20 h-20 bg-brand-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-brand-600" aria-hidden="true" />
            </div>
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 text-brand-800">
                <Sparkles className="w-5 h-5 text-brand-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">8 perguntas de múltipla escolha</span>
              </div>
              <div className="flex items-center gap-3 text-brand-800">
                <Sparkles className="w-5 h-5 text-brand-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">Feedback explicativo após cada resposta</span>
              </div>
              <div className="flex items-center gap-3 text-brand-800">
                <Sparkles className="w-5 h-5 text-brand-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">Perguntas geradas aleatoriamente a cada tentativa</span>
              </div>
            </div>
            <button onClick={startQuiz} className="btn-primary">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
              Começar quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  // === TELA DE RESULTADO ===
  if (stage === 'result') {
    const msg = scoreMessage(score, questions.length);
    return (
      <section id="quiz" className="section-padding bg-gradient-to-br from-brand-50 to-beige-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Resultado do Quiz</h2>

          <div className="card mt-8 bg-white">
            <div className="text-6xl mb-4" aria-hidden="true">{msg.emoji}</div>
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-5 py-2 rounded-full mb-4">
              <Trophy className="w-5 h-5" aria-hidden="true" />
              <span className="font-bold text-lg">
                {score} de {questions.length} acertos
              </span>
            </div>
            <h3 className="text-2xl font-bold text-brand-800 mb-3">{msg.title}</h3>
            <p className="text-brand-800/70 mb-8 max-w-md mx-auto leading-relaxed">{msg.msg}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={startQuiz} className="btn-primary">
                <RotateCcw className="w-5 h-5" aria-hidden="true" />
                Tentar novamente
              </button>
              <button onClick={restart} className="btn-secondary">
                <HelpCircle className="w-5 h-5" aria-hidden="true" />
                Voltar ao início
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#guia" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors">
              Revisar Guia de Reciclagem
            </a>
            <a href="#descarte" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors">
              Revisar Descarte Consciente
            </a>
            <a href="#economia" className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors">
              Revisar Economia Sustentável
            </a>
          </div>
        </div>
      </section>
    );
  }

  // === TELA DO QUIZ (PERGUNTA) ===
  if (!currentQuestion) return null;

  return (
    <section id="quiz" className="section-padding bg-gradient-to-br from-brand-50 to-beige-100">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="section-title">Quiz Educativo</h2>
        </div>

        {/* Barra de progresso */}
        <div className="mb-6">
          <div className="flex justify-between text-sm font-medium text-brand-700 mb-2">
            <span>Pergunta {currentIndex + 1} de {questions.length}</span>
            <span>Acertos: {score}</span>
          </div>
          <div className="h-3 bg-brand-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100}%` }}
              aria-label={`Progresso: ${currentIndex + 1} de ${questions.length}`}
              role="progressbar"
            />
          </div>
        </div>

        {/* Card da pergunta */}
        <div className="card bg-white">
          <div className="inline-flex items-center gap-2 bg-beige-100 text-brand-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <span>{currentQuestion.categoryLabel}</span>
          </div>

          <h3 className="text-xl font-bold text-brand-800 mb-6 leading-relaxed">
            {currentQuestion.question}
          </h3>

          {/* Opções */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correct;
              const showCorrect = showFeedback && isCorrect;
              const showWrong = showFeedback && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between gap-3
                    ${showCorrect
                      ? 'border-brand-500 bg-brand-50 text-brand-800'
                      : showWrong
                        ? 'border-red-400 bg-red-50 text-red-900'
                        : isSelected
                          ? 'border-brand-500 bg-brand-50 text-brand-800'
                          : 'border-brand-200 hover:border-brand-300 hover:bg-brand-50/50 text-brand-800'
                    }
                    ${showFeedback ? 'cursor-default' : 'cursor-pointer'}
                    focus:outline-none focus:ring-2 focus:ring-brand-300`}
                  aria-pressed={isSelected}
                >
                  <span className="font-medium text-sm sm:text-base">{option}</span>
                  {showCorrect && <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" aria-hidden="true" />}
                  {showWrong && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`animate-fade-in p-4 rounded-xl mb-6 border-2
              ${selectedAnswer === currentQuestion.correct
                ? 'bg-brand-50 border-brand-200'
                : 'bg-red-50 border-red-200'
              }`}>
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === currentQuestion.correct ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-brand-600" aria-hidden="true" />
                    <p className="font-bold text-brand-700">Resposta correta!</p>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
                    <p className="font-bold text-red-700">Resposta incorreta</p>
                  </>
                )}
              </div>
              <p className="text-sm text-brand-800/80 leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Botões */}
          <div className="flex justify-end gap-3">
            {!showFeedback ? (
              <button
                onClick={handleConfirm}
                disabled={selectedAnswer === null}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Confirmar resposta
              </button>
            ) : (
              <button onClick={handleNext} className="btn-primary">
                {currentIndex < questions.length - 1 ? 'Próxima pergunta' : 'Ver resultado'}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Botão desistir */}
        <div className="text-center mt-6">
          <button
            onClick={restart}
            className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors inline-flex items-center gap-1"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Reiniciar quiz
          </button>
        </div>
      </div>
    </section>
  );
}
