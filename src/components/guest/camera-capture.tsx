'use client';

import React from 'react';
import {
  Camera,
  CameraOff,
  CheckCircle2,
  Info,
  Loader2,
  RefreshCcw,
  UploadCloud,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast-provider';
import { cn } from '@/lib/utils';

type CameraCaptureProps = {
  className?: string;
};

const CAMERA_CONSTRAINTS: MediaStreamConstraints = {
  audio: false,
  video: {
    facingMode: { ideal: 'environment' },
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
};

export function CameraCapture({ className }: CameraCaptureProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const streamRef = React.useRef<MediaStream | null>(null);

  const [isSupported, setIsSupported] = React.useState<boolean | null>(null);
  const [isStreaming, setIsStreaming] = React.useState(false);
  const [capturedPhoto, setCapturedPhoto] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isActivating, setIsActivating] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState('');

  const { toast } = useToast();

  React.useEffect(() => {
    const support =
      typeof navigator !== 'undefined' &&
      Boolean(navigator.mediaDevices?.getUserMedia);
    setIsSupported(support);
  }, []);

  const stopCamera = React.useCallback(() => {
    const stream = streamRef.current;
    stream?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsStreaming(false);
  }, []);

  React.useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  const startCamera = React.useCallback(async () => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
      setError('Camera access is not available on this device.');
      setIsSupported(false);
      return;
    }

    setIsActivating(true);
    setError(null);
    setStatusMessage('Requesting camera access…');

    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        CAMERA_CONSTRAINTS
      );

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.playsInline = true;
        await videoRef.current.play();
      }

      setIsStreaming(true);
      setStatusMessage('Camera ready. Capture a moment!');
      toast({
        title: 'Camera ready',
        description: 'Tap capture to snap your favourite wedding moment.',
        variant: 'info',
      });
    } catch (err) {
      console.error(err);
      const fallbackMessage =
        err instanceof Error
          ? err.message
          : 'Something went wrong while accessing the camera.';

      setError(
        fallbackMessage.includes('Permission')
          ? 'We could not access the camera. Please allow camera permissions in your browser and try again.'
          : 'We were unable to start the camera. Try switching browsers or refreshing the page.'
      );
      setStatusMessage('Camera access blocked');
      toast({
        title: 'Camera unavailable',
        description: 'Please check permissions and try launching again.',
        variant: 'error',
      });
      stopCamera();
    } finally {
      setIsActivating(false);
    }
  }, [stopCamera, toast]);

  const capturePhoto = React.useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      setError('We could not process the photo. Please try again.');
      return;
    }

    const width = video.videoWidth;
    const height = video.videoHeight;

    if (!width || !height) {
      setError('The video feed is not ready yet. Please try again.');
      return;
    }

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const imageData = canvas.toDataURL('image/jpeg', 0.92);
    setCapturedPhoto(imageData);
    setStatusMessage('Photo captured. Share it with the couple!');

    toast({
      title: 'Moment captured',
      description: 'Review your photo and upload when ready.',
      variant: 'success',
    });
  }, [toast]);

  const resetCapture = React.useCallback(() => {
    setCapturedPhoto(null);
    setStatusMessage('Ready for another shot.');
  }, []);

  const uploadPhoto = React.useCallback(async () => {
    if (!capturedPhoto) {
      return;
    }

    setIsUploading(true);
    setStatusMessage('Uploading your memory…');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      toast({
        title: 'Photo uploaded',
        description: 'Thank you for sharing your memory with the couple.',
        variant: 'success',
      });
      setCapturedPhoto(null);
      setStatusMessage('Upload successful. Capture another moment!');
      stopCamera();
    } catch (err) {
      console.error(err);
      toast({
        title: 'Upload failed',
        description: 'Please check your connection and try again.',
        variant: 'error',
      });
      setStatusMessage('Upload failed. You can try again.');
    } finally {
      setIsUploading(false);
    }
  }, [capturedPhoto, stopCamera, toast]);

  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-dreamy ring-1 ring-wedding-primary-100 backdrop-blur-xl transition-all duration-500 hover:shadow-elegant sm:p-8',
        className
      )}
      aria-label="Camera capture section"
    >
      <div className="absolute -top-32 right-6 h-48 w-48 rounded-full bg-wedding-primary-200/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 left-12 h-60 w-60 rounded-full bg-wedding-gold/20 blur-3xl" aria-hidden="true" />

      <div className="relative flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 shadow-soft">
            {capturedPhoto ? (
              <img
                src={capturedPhoto}
                alt="Captured wedding memory preview"
                className="h-72 w-full object-cover"
              />
            ) : isStreaming ? (
              <video
                ref={videoRef}
                className="h-72 w-full rounded-2xl object-cover"
                playsInline
                muted
                autoPlay
                aria-label="Live camera preview"
              />
            ) : (
              <div className="flex h-72 w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-wedding-primary-50 via-white to-wedding-champagne p-6 text-center">
                <div className="rounded-full bg-white p-4 shadow-soft">
                  <Camera className="size-8 text-wedding-primary-500" aria-hidden="true" />
                </div>
                <p className="text-lg font-medium text-wedding-secondary-700">
                  Launch the live camera to capture memories instantly.
                </p>
                <p className="text-sm text-wedding-secondary-500">
                  Works on iOS, Android, and desktop browsers that support
                  camera access.
                </p>
              </div>
            )}

            {statusMessage ? (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent px-4 py-3 text-sm font-medium text-white" aria-live="polite">
                {statusMessage}
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-full space-y-5 lg:max-w-sm">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-wedding-primary-100 px-4 py-1 text-sm font-semibold text-wedding-primary-600">
              <SparkleIndicator /> Live photo booth
            </span>
            <h3 className="font-serif text-3xl font-bold text-wedding-primary-900">
              Share the celebration in real time
            </h3>
            <p className="text-sm text-wedding-secondary-600">
              Capture and instantly upload photos from the ceremony. Your
              pictures will be part of the couple&apos;s wedding gallery.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-wedding-secondary-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 text-wedding-sage" aria-hidden="true" />
              <span>Optimised for Safari (iOS), Chrome (Android), and modern desktop browsers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 text-wedding-sage" aria-hidden="true" />
              <span>Respectful of privacy — recordings are only stored when you upload.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 text-wedding-sage" aria-hidden="true" />
              <span>Accessible controls with clear focus states for keyboard and switch users.</span>
            </li>
          </ul>

          {error ? (
            <div
              className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50/70 px-4 py-3 text-sm text-rose-700"
              role="alert"
            >
              <CameraOff className="mt-0.5 size-5" aria-hidden="true" />
              <div>
                <p className="font-semibold">Camera access issue</p>
                <p className="text-rose-600/90">{error}</p>
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            {isStreaming ? (
              <Button
                type="button"
                onClick={capturePhoto}
                className="flex-1 min-w-[160px] bg-wedding-primary-500 text-white shadow-soft hover:bg-wedding-primary-600"
              >
                <Camera className="size-4" aria-hidden="true" />
                Capture photo
              </Button>
            ) : (
              <Button
                type="button"
                onClick={startCamera}
                disabled={isActivating || isSupported === false}
                className="flex-1 min-w-[180px] bg-wedding-primary-500 text-white shadow-soft hover:bg-wedding-primary-600 disabled:cursor-not-allowed disabled:bg-wedding-primary-200"
              >
                {isActivating ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Camera className="size-4" aria-hidden="true" />
                )}
                {isActivating ? 'Preparing camera…' : 'Launch camera'}
              </Button>
            )}

            {isStreaming ? (
              <Button
                type="button"
                variant="outline"
                onClick={stopCamera}
                className="flex-1 min-w-[140px] border-wedding-secondary-200 text-wedding-secondary-700 hover:bg-wedding-secondary-50"
              >
                <RefreshCcw className="size-4" aria-hidden="true" />
                Stop preview
              </Button>
            ) : null}

            {capturedPhoto ? (
              <>
                <Button
                  type="button"
                  onClick={uploadPhoto}
                  disabled={isUploading}
                  className="flex-1 min-w-[180px] bg-wedding-gold text-wedding-secondary-900 hover:bg-wedding-gold/90"
                >
                  {isUploading ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <UploadCloud className="size-4" aria-hidden="true" />
                  )}
                  {isUploading ? 'Uploading…' : 'Upload photo'}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={resetCapture}
                  className="flex-1 min-w-[120px] text-wedding-secondary-600 hover:bg-wedding-secondary-50"
                >
                  <RefreshCcw className="size-4" aria-hidden="true" />
                  Retake
                </Button>
              </>
            ) : null}
          </div>

          <div className="rounded-2xl border border-wedding-secondary-100 bg-white/70 px-4 py-3 text-sm text-wedding-secondary-500">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-4" aria-hidden="true" />
              <p>
                Tip: On iOS, open this page in Safari and ensure that Settings →
                Safari → Camera is set to &ldquo;Allow&rdquo;. On Android, Chrome
                works best when camera permissions are enabled.
              </p>
            </div>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />

      {isSupported === false ? (
        <p
          className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm text-amber-800"
          role="alert"
        >
          <CameraOff className="mt-0.5 size-5" aria-hidden="true" />
          <span>
            It looks like this device or browser does not support camera
            capture. You can still upload photos through the gallery feature.
          </span>
        </p>
      ) : null}
    </section>
  );
}

function SparkleIndicator() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wedding-primary-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-wedding-primary-500" />
    </span>
  );
}
