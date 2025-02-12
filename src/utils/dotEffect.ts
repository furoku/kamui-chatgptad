/**
 * キャンバスに指定されたサイズと明るさのドットパターンを描画します
 * @param ctx - 描画コンテキスト
 * @param x - ドットのX座標
 * @param y - ドットのY座標
 * @param size - ドットの基本サイズ
 * @param brightness - 明るさ（0-1の範囲）
 */
export function createDotPattern(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  brightness: number
): void {
  // 明るさに基づいてドットサイズを調整
  const adjustedSize = size * brightness;
  
  // ドットを描画
  ctx.beginPath();
  ctx.arc(x, y, adjustedSize / 2, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
} 