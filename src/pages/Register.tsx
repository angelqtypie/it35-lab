import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonTitle,
    IonModal,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAlert,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

// Reusable Alert Component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [Name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleOpenVerificationModal = () => {
        if (password !== confirmPassword) {
            setAlertMessage("Passwords do not match.");
            setShowAlert(true);
            return;
        }

        setShowVerificationModal(true);
    };

    const doRegister = async () => {
        setShowVerificationModal(false);

        try {
            const { data, error } = await supabase.auth.signUp({ email, password });

            if (error) throw new Error("Account creation failed: " + error.message);

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const { error: insertError } = await supabase.from("users").insert([
                {
                    username,
                    user_email: email,
                    user_name: Name,
                    user_password: hashedPassword,
                },
            ]);

            if (insertError) throw new Error("Failed to save user data: " + insertError.message);

            setShowSuccessModal(true);
        } catch (err) {
            if (err instanceof Error) {
                setAlertMessage(err.message);
            } else {
                setAlertMessage("An unknown error occurred.");
            }
            setShowAlert(true);
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle style={{ textAlign: 'center', marginTop: '10px' }}>Create Your Account</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>

                        <IonGrid>
                            <IonRow>
                                <IonCol size="12">
                                    <IonInput label="Username" labelPlacement="stacked" fill="outline" placeholder="Enter a unique username" autocomplete="off" value={username} onIonChange={e => setUsername(e.detail.value!)} />
                                </IonCol>

                                <IonCol size="12">
                                    <IonInput label="Name" labelPlacement="stacked" fill="outline" placeholder="Enter your name" autocomplete="off" value={Name} onIonChange={e => setFirstName(e.detail.value!)} />
                                </IonCol>

                                <IonCol size="12">
                                    <IonInput label="Email" labelPlacement="stacked" fill="outline" type="email" placeholder="Enter your email" autocomplete="off" value={email} onIonChange={e => setEmail(e.detail.value!)} />
                                </IonCol>

                                <IonCol size="12">
                                    <IonInput label="Password" labelPlacement="stacked" fill="outline" type="password" placeholder="Enter password" autocomplete="off" value={password} onIonChange={e => setPassword(e.detail.value!)} >
                                        <IonInputPasswordToggle slot="end" />
                                    </IonInput>
                                </IonCol>

                                <IonCol size="12">
                                    <IonInput label="Confirm Password" labelPlacement="stacked" fill="outline" type="password" placeholder="Confirm password" autocomplete="off" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!) } >
                                        <IonInputPasswordToggle slot="end" />
                                    </IonInput>
                                </IonCol>

                                <IonCol size="12">
                                    <IonButton expand="block" shape="round" onClick={handleOpenVerificationModal}>
                                        Register
                                    </IonButton>
                                </IonCol>

                                <IonCol size="12">
                                    <IonButton routerLink="/it35-lab" expand="block" fill="clear" shape="round">
                                        Already have an account? Sign in
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                {/* Verification Modal */}
                <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
                    <IonContent className="ion-padding">
                        <IonCard style={{ marginTop: '25px' }}>
                            <IonCardHeader>
                                <IonCardTitle style={{ textAlign: 'center' }}>Confirm Registration</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText>
                                    <p><strong>Username:</strong> {username}</p>
                                    <p><strong>Email:</strong> {email}</p>
                                    <p><strong>Name:</strong> {Name}</p>
                                </IonText>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                                    <IonButton fill="outline" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                                    <IonButton color="primary" onClick={doRegister}>Confirm</IonButton>
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </IonContent>
                </IonModal>

                {/* Success Modal */}
                <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
                    <IonContent className="ion-padding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <IonTitle style={{ marginBottom: '10px' }}>🎉 Registration Successful</IonTitle>
                        <IonText className="ion-text-center">
                            <p>Your account has been created successfully.</p>
                            <p>Please check your email to verify your account.</p>
                        </IonText>
                        <IonButton routerLink="/it35-lab" routerDirection="back" color="primary" style={{ marginTop: '20px' }}>
                            Go to Login
                        </IonButton>
                    </IonContent>
                </IonModal>

                {/* Reusable AlertBox */}
                <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
            </IonContent>
        </IonPage>
    );
};

export default Register;
