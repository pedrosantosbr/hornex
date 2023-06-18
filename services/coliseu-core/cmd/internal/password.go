package internal

import "golang.org/x/crypto/bcrypt"

type Hasher struct{}

func (h *Hasher) Hash(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func (h *Hasher) Check(password, hash string) error {
	return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
}

func NewHasher() *Hasher {
	return &Hasher{}
}
